import journalApi from "@/api/journalApi"


export const loadEntries = async ({commit}) => {
  
  const { data } = await journalApi.get("/entries.json")

  if(!data) return commit("setEntries", [])

  const entries = []

  for(let id of Object.keys(data)){

    entries.push({
      id,
      ...data[id]
    })

  }

  commit("setEntries", entries)
 
}

export const updateEntry = async ({commit}, entry) => {
  
  const updatedEntry = {
    date: entry.date,
    text: entry.text,
    picture: entry.picture
  }

  await journalApi.put(`/entries/${entry.id}.json`, updatedEntry)

  commit("updateEntry", {...entry})

}

export const addEntry = async ({commit}, entry) => {

  let newEntry = {
    date: entry.date,
    text: entry.text,
    picture: entry.picture
  }

  const { data } = await journalApi.post(`/entries.json`, newEntry)

  newEntry = {
    ...newEntry,
    id: data.name
  }

  commit("addEntry", newEntry)

  return data.name

}


export const deleteEntry = async ({commit}, id) => {

  await journalApi.delete(`/entries/${id}.json`)

  commit("deleteEntry", id)

}