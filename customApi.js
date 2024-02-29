const setFamilyMembersApi = (families) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                families.forEach(family => {
                    if (family.fatherName.toLowerCase() === 'yves') {
                        throw new Error('Yves is not an allowed dad in 2022');
                    }
                    family.totalNumberofFamilyMembers = family.childrenNumber + 2; 
                });
                resolve(families);
            } catch (error) {
                reject(error);
            }
        }, 4000);
    });
}

const families = [
    { fatherName: "John", motherName: "Jane", childrenNumber: 2 },
    // { fatherName: "Yves", motherName: "Yvette", childrenNumber: 3 },
    { fatherName: "mclaren", motherName: "Yvette", childrenNumber: 3 },
    { fatherName: "Eric", motherName: "Erin", childrenNumber: 1 }
];

const api = async () => {
    try {
        let updatedFamilies = await setFamilyMembersApi(families);
        console.log(updatedFamilies);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
};

api();