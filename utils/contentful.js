// const client = require('contentful').createClient({});

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const fetchEntries = async (query) => {
  const entries = await client.getEntries(query);
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for.`);
};
export const fetchEntry = async (options) => {
  const entry = await client.getEntry(options);
  return entry;
};

export default fetchEntries;
