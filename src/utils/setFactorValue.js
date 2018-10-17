export const setFactorValue = (inputName, factor) => {
    const { factorData } = window || []
    const factorByInputName = factorData[factorData.findIndex(fd => fd.name === inputName)]

    factorByInputName.value = factor
}