export const getHelperChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.helper
}


export const getUserInfo = async ({
  helperContract,
  user_,
  tokens_,
  approves_,
  farm_,
  pids_,
  dao_,
}) => {
  try {
    let res = await helperContract.methods
      .userInfo(user_, tokens_, approves_, farm_, pids_, dao_)
      .call();
    return res || [];
  } catch (e) {
    return [];
  }
};