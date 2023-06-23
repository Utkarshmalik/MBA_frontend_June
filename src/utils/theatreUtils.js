

const columns = [
 {
  name: "name",
  label: "Theatre Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "description",
  label: "Description",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "city",
  label: "City",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "pinCode",
  label: "PinCode",
  options: {
   filter: true,
   sort: false,
  }
 },
];

 const options = {
  filterType: 'checkbox',
};

export const TheatreTableMetaData = {columns, options};