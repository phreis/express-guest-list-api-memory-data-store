const baseUrl = 'http://localhost:4000';
fetch('https://randomuser.me/api/?results=10&nat=de')
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((user) => {
      fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: user.name.first,
          lastName: user.name.last,
        }),
      })
        .then((response) => response.json())
        .then((resp) => console.log(resp))
        .catch(function (err) {
          console.log('Unable to fetch -', err);
        });
    });
  })
  .catch(function (err) {
    console.log('Unable to fetch -', err);
  });
