import {
    getStakingAddress,
    getApeAddress,
    getVariableAddress,
  } from "../utils/addressHelper";
  import { useWeb3 } from "../utils/useWeb3";
  
  import staking from "../config/abis/staking.json";
  import variable from "../config/abis/variable.json";
  import ape from "../config/abis/ape.json";
  
  const useContract = (abi: any, add: any) => {
    const web3 = useWeb3();
    return new web3.eth.Contract(abi, add);
  };
  /**
   * Helper hooks to get specific contracts (by ABI)
   */
  
  export const useApeContract = () => {
    return useContract(ape, getApeAddress());
  };
  
  export const useStakingContract = () => {
    return useContract(staking, getStakingAddress());
  };
  
  export const useVariableContract = () => {
    return useContract(variable, getVariableAddress());
  };
  
  export default useContract;
  