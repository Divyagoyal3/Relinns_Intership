const dataset = [
    { first_name: "Jewelle", last_name: "Tuckley", email: "jtuckley0@earthlink.net" },
    { first_name: "Nealy", last_name: "Chettoe", email: "nchettoe1@typepad.com" },
    { first_name: "Lorelei", last_name: "Filyaev", email: "lfilyaev2@pen.io" },
    { first_name: "Darcey", last_name: "Weatherup", email: "dweatherup3@msn.com" },
    { first_name: "Sandye", last_name: "Petrovsky", email: "spetrovsky4@ycombinator.com" },
    { first_name: "Stephenie", last_name: "Brunskill", email: "sbrunskill5@godaddy.com" },
    { first_name: "Lindi", last_name: "Hullah", email: "lhullah6@va.gov" },
    { first_name: "Eada", last_name: "Longmore", email: "elongmore7@bandcamp.com" },
    { first_name: "Godart", last_name: "Aguilar", email: "gaguilar8@slate.com" },
    { first_name: "Lanni", last_name: "Sendley", email: "lsendley9@unblog.fr" },
    { first_name: "Bertram", last_name: "Mateiko", email: "bmateikoa@flickr.com" },
    { first_name: "Alyson", last_name: "Fretter", email: "afretterb@nasa.gov" },
    { first_name: "Sharona", last_name: "Ginger", email: "sgingerc@pagesperso-orange.fr" },
    { first_name: "Rosamond", last_name: "Krochmann", email: "rkrochmannd@wired.com" },
    { first_name: "Dannie", last_name: "Maccree", email: "dmaccreee@domainmarket.com" },
    { first_name: "Cherie", last_name: "Brood", email: "cbroodf@skyrock.com" },
    { first_name: "Cecily", last_name: "Callway", email: "ccallwayg@nps.gov" },
    { first_name: "Mack", last_name: "Sephton", email: "msephtonh@theatlantic.com" },
    { first_name: "Cody", last_name: "Rault", email: "craulti@scribd.com" },
    { first_name: "Vyky", last_name: "Marke", email: "vmarkej@mlb.com" },
    { first_name: "Ettie", last_name: "Jojic", email: "ejojick@marriott.com" },
    { first_name: "Nester", last_name: "Dudny", email: "ndudnyl@amazonaws.com" },
    { first_name: "Pietro", last_name: "Artis", email: "partism@scientificamerican.com" },
    { first_name: "Ivonne", last_name: "Ivashnyov", email: "iivashnyovn@sfgate.com" },
    { first_name: "Jeffry", last_name: "Pennycock", email: "jpennycocko@comsenz.com" },
    { first_name: "Marlon", last_name: "Ledson", email: "mledsonp@goodreads.com" },
    { first_name: "Zacharias", last_name: "Slocombe", email: "zslocombeq@webs.com" },
    { first_name: "Rainer", last_name: "Brimelow", email: "rbrimelowr@nydailynews.com" },
    { first_name: "Howard", last_name: "Shillingford", email: "hshillingfords@hp.com" },
    { first_name: "Giavani", last_name: "Papen", email: "gpapent@boston.com" }
  ];
 
  //Task 1:
  // function returnemail(arr)
  {
     const resultSet=dataset.map((x) => x.email);
     return resultSet;

  }

  console.log(returnemail(dataset));

 //  Task 2
 
 


function returnEmailstart(dataset) {
    return dataset.map(x => {
        const index = x.email.indexOf('@');
        const name = x.email.slice(0, index);
        const newname = name.charAt(0).toUpperCase() + name.slice(1);
        return newname;
    });
}


console.log(returnEmailstart(dataset));


// Task 3
function printtask(arr) {
    return arr.map((x) => {
        const newfname = x.first_name.charAt(0).toUpperCase() + x.first_name.slice(1);
        const newlname = x.last_name.charAt(0).toUpperCase() + x.last_name.slice(1);

        // return Hi, I am ${newFname} ${newLname}. You can reach out to me on ${x.email}.;
       
    });
}

console.log(printtask(dataset));

//Task 4
 function sortemail(dataset) {
    dataset.sort((a, b) => a.email.localeCompare(b.email));
    return dataset;
}

const sorteddata = sortemail(dataset);
console.log(sorteddata);



//Task 5

 function getRandomAge() {
     return Math.floor(Math.random() * (35 - 10 )) + 11;
   }
  const newdatawithage = dataset.map((x) => {
    const newx = {};
    for (let k in x) {
      newx[k] = x[k];
    }
    newx.age = getRandomAge();
    return newx;
  });
 
  console.log(newdatawithage);

