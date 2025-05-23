import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';

/*  Original unchanged

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

*/


// Updated to split into two lists, one for Chemists, and one for everyone else.

export default function List() {
        const chemists = people.filter(person =>
            person.profession === 'chemist'
        );
        const everyoneElse = people.filter(person =>
            person.profession !== 'chemist'
        );
        return (
            <article>
                <h1>Scientists</h1>
                <h2>Chemists</h2>
                <ul>
                    {chemists.map(person =>
                        <li key={person.id}>
                            <img
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    )}
                </ul>
                <h2>Everyone Else</h2>
                <ul>
                    {everyoneElse.map(person =>
                        <li key={person.id}>
                            <img
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                   )}
                </ul>
            </article>
        );
}
