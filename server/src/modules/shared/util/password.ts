import * as bcrypt from 'bcrypt';

import appConfig from 'src/config';

export const hash = async (value: string) => {
  const rounds = appConfig.auth.SALT_OR_ROUNDS;
  const salt = await bcrypt.genSalt(rounds);

  return bcrypt.hash(value, salt);
};

export const compare = (value: string, hash: string) => {
  return bcrypt.compare(value, hash);
};
