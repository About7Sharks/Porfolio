import { useEffect } from "react";
import { useNetworkStatus } from "react-adaptive-hooks/network";
import { useSaveData } from "react-adaptive-hooks/save-data";

export default function AdaptiveDesign() {
  async function anal() {
    console.log("getting");
    let cat = await fetch(
      "https://usephantom.com/zacarlin.eth.link&sid=MYAVNTQV"
    );
    console.log(cat);
  }
  useEffect(() => {
    anal();
  }, []);
  const { saveData } = useSaveData();

  const { effectiveConnectionType } = useNetworkStatus();
  console.log("save data: " + saveData, effectiveConnectionType);
  return <div>{(effectiveConnectionType, saveData)}</div>;
}
