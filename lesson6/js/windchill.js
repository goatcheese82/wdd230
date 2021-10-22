export const calculateChill = (temp, speed) => {
   if (temp < 50 && speed > 3) {
      let chill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
      return chill;
   }
   else {
      return "N/A";
   }
}