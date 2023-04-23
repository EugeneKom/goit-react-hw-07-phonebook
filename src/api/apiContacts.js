const BASE_URL = 'https://64415eee792fe886a8a5d4f9.mockapi.io';

export const createContact = async ({ name, phone }) => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      phone,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error: createContact  => ' + response.status);
  }

  return await response.json();
};

export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  if (!response.ok) {
    throw new Error('Error: getContacts  => ' + response.status);
  }
  return await response.json();
};

export const removeContact = async id => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error: removeContact  => ' + response.status);
  }
  return await response.json();
};
