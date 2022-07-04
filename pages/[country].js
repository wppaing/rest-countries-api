import CardDetail from "../components/carddetail";

const Country = ({ data }) => <CardDetail country={data[0]} />;

export async function getServerSideProps(context) {
  const route = context.params.country;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${route}?fullText=true&&fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders`
  );
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Country;
