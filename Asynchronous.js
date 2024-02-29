const setStudentAgeApi = (student, age) => {
    return new Promise((resolve, reject) => {
        try {
            console.log("1. Starting ..");
            setTimeout(() => {
                console.log("2. Setting age for the student");
                if (typeof age !== 'number' | age < 0) {
                    throw new Error('Age must be a number and greater than 0');
                }
                student.age = age;
                resolve(student);
            }, 2000);
        } catch (error) {
            reject(error);
        }
    }).then(() => {
        console.log("3. Done ..");
     }).catch((error) => {
        console.error(`An error occurred: ${error.message}`);
     });
}

let student = { name: "Eric" };
setStudentAgeApi(student, 20).then(() => {
    console.log(student);
});
// setStudentAgeApi(student, -20)


