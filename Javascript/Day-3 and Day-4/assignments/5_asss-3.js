function peopleWhoBelongToTheIlluminati(arr) {

    // Use filter to get only the members
  
    const illuminatedMembers = arr.filter(function(person) {
  
      return person.member === false;
  
    });
  
  
  
    return illuminatedMembers;
  
  }