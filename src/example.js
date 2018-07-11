import levelup  from 'levelup';
import leveldown from 'leveldown';

export function levelupWrite() {
  const db = levelup(leveldown('./mydb'));
  return db.put('foo', {xxx: 'barbar'})
    .then(() => {
      console.log('Inside put THEN');
      return db.get('foo');
    }).then((v) => {
      console.log('Got v:', v[2].toString());
    });
}
