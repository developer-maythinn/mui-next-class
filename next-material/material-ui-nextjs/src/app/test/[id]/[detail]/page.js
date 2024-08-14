export default function Page({ params }) {
  console.log(params);
  return (
    <div>
      {`This is ${params.id}`}
      My Post detail: {params.id} {params.detail}
    </div>
  );
}
