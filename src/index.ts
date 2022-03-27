import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { createDataLoaders } from './loaders';
import { typeDefs } from './schema';
import { connect } from 'mongoose';
import express from 'express';
import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { User } from './models/User';

if (!process.env.MONGO_URL) throw new Error('please use the MONGO_URL env var');
connect(process.env.MONGO_URL);

// TODO use this in your signup / login function to generate tokens
if(!process.env.AUTHENTICATIONSECRET){
  throw new Error("No process.env.AUTHENTICATIONSECRET")
}

// defines the passport auth strategy (which is basically just checking to decrypt and if it has the user)
const strategy = new Strategy(
  {
    secretOrKey: process.env.AUTHENTICATIONSECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const user = await User.findOne({_id: payload._id}) || null;
    return done(null, user);
  },
);

// set up middlewares
passport.use(strategy);
const app = express();
passport.initialize();
app.use('/graphql', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (user) req.user = user;
    next();
  })(req, res, next);
});

// apollo and start
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => ({
    user: req.user,
    loaders: createDataLoaders(),
  }),
  introspection: true,
});

apollo.start().then(() => {
  apollo.applyMiddleware({ app });
  app.listen(4000);
});
