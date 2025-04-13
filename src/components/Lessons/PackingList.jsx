// Unicode for checkmark is U+2705, you can either do this via copy pasting the actual ✅, or you can use {'\u2705'}, or String.fromCodePoint(0x2705)
// Unicode for x mark is U+274C, you can either do this via copy pasting the actual ❌, or you can use {'\u274C'}, or String.fromCodePoint(0x274C)

function Item({ name, importance, isPacked }) {
    return (
      <li className="item">
        {name}
        {isPacked ? ' \u2705' : ' \u274C'}
        {importance > 0 && ' '}
        {importance > 0 &&
          <i>(Importance: {importance})</i>
        }
      </li>
    );
  }

export default function PackingList() {
    return (
        <section>
            <h1>
                Sally Ride's Packing List
            </h1>

            <ul>
                <Item
                    importance={9}
                    isPacked={true}
                    name="Space Suit"
                />
                <Item
                    importance={0}
                    isPacked={false}
                    name="Helmet with golden leaf"
                />
                <Item
                    importance={7}
                    isPacked={true}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}