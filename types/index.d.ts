/* eslint-disable no-var */
import { Session } from "./next-auth";

declare global {
  var prisma: any;
}

export { Session };