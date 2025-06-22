// Update here for new journeys
import Journey1_Australia from './Journey1_Australia';
import Journey2_Scotland from './Journey2_Scotland';
// import Journey3_JapanAlps from './Journey3_JapanAlps';

export const journeyList = [
  { id: "australia", name: "澳大利亚" },
  { id: "scotland", name: "苏格兰" },
  // { id: "japan-alps", name: "Japan Alps" },
];

export const journeyMap = {
  australia: Journey1_Australia,
  scotland: Journey2_Scotland,
  // "japan-alps": Journey3_JapanAlps,
};
