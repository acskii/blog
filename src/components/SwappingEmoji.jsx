function SwappingEmoji({on, off}) {
    return (
    <label className="swap swap-flip">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">{on}</div>
        <div className="swap-off">{off}</div>
    </label>
    );
}

export default SwappingEmoji;