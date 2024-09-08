const findClosest = (field, inputValue, data) => {
    
    let minDifference = Math.abs(data[0][field] - inputValue);
    
    // Step 1: Find the minimum difference
    data.forEach((entry) => {
        const difference = Math.abs(entry[field] - inputValue);
        if (difference < minDifference) {
            minDifference = difference; 
        }
    });
    
    // Step 2: Collect all entries with the same minimum difference
    const closestEntries = data.filter(
        (entry) => Math.abs(entry[field] - inputValue) === minDifference
    );
    
    return closestEntries;
};

export default findClosest;
