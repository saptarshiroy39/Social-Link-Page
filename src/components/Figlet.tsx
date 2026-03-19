"use client";

import { useEffect } from "react";

export default function Figlet() {
  useEffect(() => {
    const figletText = `      ___           ___     
     /  /\\         /  /\\    
    /  /:/_       /  /::\\   
   /  /:/ /\\     /  /:/\\:\\  
  /  /:/ /::\\   /  /:/~/:/  
 /__/:/ /:/\\:\\ /__/:/ /:/___
 \\  \\:\\/:/~/:/ \\  \\:\\/:::::/
  \\  \\::/ /:/   \\  \\::/~~~~ 
   \\__\\/ /:/     \\  \\:\\     
     /__/:/       \\  \\:\\    
     \\__\\/         \\__\\/    `;

    console.log(
      `%c\n${figletText}\n`,
      "color: #5BAFE3; font-family: monospace; white-space: pre; line-height: normal;",
    );
  }, []);

  return null;
}
