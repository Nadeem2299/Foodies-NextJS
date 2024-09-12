export default function MealDetailsPage({ params }) {
  return (
    <main>
    <h1>This is a Meal</h1>
    <p>This is a paragraph of text.</p>
    <p>{params.mealSlug}</p>
    </main>
  )
}