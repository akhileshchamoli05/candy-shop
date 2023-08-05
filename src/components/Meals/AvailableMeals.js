import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Canvas',
    description: 'Campus',
    price: 2,
  },
  {
    id: 'm2',
    name: 'Boot',
    description: 'Bata',
    price: 3,
  },
  {
    id: 'm3',
    name: 'Sneakers',
    description: 'Red Tape',
    price: 1,
  },
  {
    id: 'm4',
    name: 'Flip flop',
    description: 'crocs',
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
