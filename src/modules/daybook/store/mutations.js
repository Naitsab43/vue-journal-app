

export const setEntries = (state, entries) => {
 
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
  
}

export const updateEntry = (state, updatedEntry) => {
  
  state.entries = state.entries.map(entry => {
    
    if(entry.id === updatedEntry.id){
      return updatedEntry
    }

    return entry

  })

}

export const addEntry = (state, newEntry) => {
  
  state.entries.unshift(newEntry)

}


export const deleteEntry = (state, id) => {

  state.entries = state.entries.filter(entry => entry.id !== id)

}