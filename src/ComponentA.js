export function ComponentA({ user }) {
    // let user = items.user

    function btn() {
        console.log(user);
    }

    return (
        <div>
            <button onClick={btn}>ComponentA</button>
        </div>
    );
}