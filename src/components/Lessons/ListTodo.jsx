const todos = [
    { task: "Mow the yard.", id: crypto.randomUUID() },
    { task: "Work on odin projects.", id: crypto.randomUUID() },
    { task: "Feed the cat.", id: crypto.randomUUID() }
]

export default function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                // Here we use the generated ID as the key.
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}

