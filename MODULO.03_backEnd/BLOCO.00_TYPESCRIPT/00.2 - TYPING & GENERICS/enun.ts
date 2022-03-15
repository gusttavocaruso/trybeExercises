enum StudentStatus {
  Active,
  Inactive,
  Paused
}
let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus); //saída: 1

// =============
// para não começar a sequencia por 0:
enum StudentStatus2 {
  Active = 1,
  Inactive,
  Paused
}
let newStudentStatus2: StudentStatus2 = StudentStatus2.Inactive;
console.log(newStudentStatus); //saída: 2

// ===============
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}
const ok = StatusCodes.OK; // saída: 200
const indiceOk = StatusCodes["OK"]; // saída: 200
const stringBadRequest = StatusCodes[400]; // saída: BadRequest

// ===============
// ex:
enum directionsGamePad {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGTH = "RIGHT",
}
