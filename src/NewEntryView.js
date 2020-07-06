import React, { useState, useContext } from 'react'
import StateContext from './store'

export default function NewEntryView(props) {
    const { cat_id } = props.match.params
    // const { categories, addEntry } = props
    const [entry, setEntry] = useState("")

    const { store, dispatch } = useContext(StateContext)

    const addEntry = (entry) => {
        dispatch({
            type: "setEntries",
            data: [...store.entries, entry]
        })
    }

    return (
        <div>
            <h1>New Entry</h1>
            <h4>Category: {store.categories[cat_id]}</h4>
            <form onSubmit={e => { e.preventDefault(); addEntry({ entry, category: store.categories[cat_id] }) }}>
                <div>
                    <textarea value={entry} onChange={e => setEntry(e.target.value)}></textarea>
                </div>
                <button>Create New Entry</button>
            </form>
        </div>
    )
}

