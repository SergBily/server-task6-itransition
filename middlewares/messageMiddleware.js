export async function MessageMiddleware(req, res, next) {
  try {
    const { from, to } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return next(ApiError.NotFound(`User with ${email} email is not registered!`));
      } else if (user.access === 'blocked'){
      return next(ApiError.Forbidden());
    }
    next();
  } catch (e) {
    return next(ApiError.NotFound(`User is not registered!`));
  }
}