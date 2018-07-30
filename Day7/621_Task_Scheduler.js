/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// WRONG
// const leastInterval = (tasks, n) => {
//     if (n === 0) return tasks.length;
//     const schedule = [];
//     const taskMap = {};
//     tasks.forEach((task, i) => {
//         if (taskMap[task]) taskMap[task].push(i);
//         else taskMap[task] = [i];
//     });
//     console.log('taskMap: ', taskMap);
//     let taskTypes = Object.keys(taskMap).sort((a, b) => taskMap[b].length - taskMap[a].length);
//     console.log(taskTypes);
//     let i = 0;//index
//     while (taskMap[taskTypes[i]] ? taskMap[taskTypes[i]].length > 0 : false) {
//         schedule.push(taskTypes[i]);
//         taskMap[taskTypes[i]] = taskMap[taskTypes[i]].slice(1);
//         i++;
//         for (let j = 0; j < n; j++) {// time
//             if (taskMap[taskTypes[i]]) {
//                 let hasTask = false;
//                 let k = i;
//                 while (k <= taskTypes.length - 1 & !hasTask && taskMap[taskTypes[k]]) {
//                     if (taskMap[taskTypes[k]].length > 0) {
//                         schedule.push(taskTypes[k]);
//                         taskMap[taskTypes[k]] = taskMap[taskTypes[k]].slice(1);
//                         hasTask = true;
//                     } else k++;
//                 }
//                 if (!hasTask) schedule.push('idle');
//                 else i++;
//             } else schedule.push('idle');
//         }
//         i = 0;
//         while (taskMap[taskTypes[i]] ? taskMap[taskTypes[i]].length === 0 : false) {
//             taskTypes = taskTypes.slice(1)
//         }
//     }
//     console.log('schedule: ', schedule);
//     console.log('taskMap: ', taskMap);
//     while (schedule[schedule.length - 1] === 'idle') {
//         schedule.pop();
//     }
//     return schedule.length;
// };

// console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G", "A", "A"], 1));