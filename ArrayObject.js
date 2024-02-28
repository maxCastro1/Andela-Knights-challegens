function formatArray(arr) {
    let result = {
        females: [],
        males: []
    };

    arr.forEach(person => {
        let [name, age, gender] = person.split(', ');
        let [firstName, secondName] = name.split(' ');

        let personObj = {};
        personObj[firstName] = { 'second-name': secondName, age: parseInt(age) };

        if (gender === 'female') {
            result.females.push(personObj);
        } else if (gender === 'male') {
            result.males.push(personObj);
        }
    });

    return result;
}

let array = ["Patrick wyne, 30, male", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male","Patrick wyne, 40,male"]
console.log(formatArray(array));
