// import { useState } from "react";

// export function usePortfolio() {
//   const [loading, setLoading] =
//     useState(false);

//   async function request(
//     url,
//     options = {},
//   ) {
//     try {
//       setLoading(true);

//       const response =
//         await fetch(url, options);

//       const result =
//         await response.json();

//       return {
//         success: response.ok,
//         data: result,
//       };
//     } catch (error) {
//       console.error(error);

//       return {
//         success: false,
//         data: null,
//       };
//     } finally {
//       setLoading(false);
//     }
//   }

//   return {
//     loading,
//     request,
//   };
// }