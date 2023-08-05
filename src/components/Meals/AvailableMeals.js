import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Eclair',
    description: 'chocolaty',
    price: 2,
  },
  {
    id: 'm2',
    name: 'Maha Lacto',
    description: 'sweet',
    price: 3,
  },
  {
    id: 'm3',
    name: 'Creamfills',
    description: 'syrup',
    price: 1,
  },
  {
    id: 'm4',
    name: 'Atom',
    description: 'sour',
    price: 5,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
