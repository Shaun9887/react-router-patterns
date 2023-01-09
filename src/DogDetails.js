import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    console.log(name);

    //filter method gives new array with single dog info if name in URL matches a name in props (dogs.name)
    const dogInfo = dogs.filter(dog => (dog.name === name));

    if (Object.keys(dogInfo).length === 0) return (<Redirect to="/dogs" />)

    const foundMatch = name === dogInfo[0].name;
    console.log(foundMatch);

    const { age, facts, src } = dogInfo[0];

    const dogFacts = facts.map((f, i) =>
        <li key={i}>{f}</li>
    );

    return (
        <>
            <h1>{name}</h1>
            <img src={src} alt={name} />
            <p>Hi! I am {age} years old!</p>
            <ul>
                {dogFacts}
            </ul>
        </>
    )

}

export default DogDetails;