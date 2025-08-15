import ratelimit from "../configs/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = "user_id";
    const { success } = await ratelimit.limit(identifier);
    if (!success) {
      return res.status(429).json({ message: "Too many request..." });
    }
    next();
  } catch (error) {
    console.log("Error in ratelimiter", error);
    next(error);
  }
};

export default rateLimiter;
