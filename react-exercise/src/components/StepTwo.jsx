function StepTwo() {
    return (
        <>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email" />
                <br /><br />
                <label htmlFor="number">Phone Number</label>
                <input type="text" id="number" placeholder="Phone Number" />
            </form>
            <button style={{ margin: "10px" }}>Previous</button>
            <button>Next</button>
        </>
    )
}

export default StepTwo