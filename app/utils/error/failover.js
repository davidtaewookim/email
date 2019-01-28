const failover = (main, backup) => {
  const inner = async (...param) => {
    let result = '';
    try {
      result = await main(...param);
    } catch (e) {
      result = await backup(...param);
    }
    return result;
  };
  return inner;
};

module.exports = failover;
