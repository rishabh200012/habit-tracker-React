import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";

const HabitCard = (props) => {
  const { habit } = props;
  var target = 6; 

  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          <div className={styles.habitActionName}>
           
            <span className={styles.cardName}>
               { ` ${habit.name} `} <i class="fa-solid fa-arrow-right"></i>
            </span>
            <span>
              <ActionButton habit={habit} />
            </span>
          </div>
          <div>
          <i className="fa-solid fa-trash" onClick={handleDeleteHabit}></i>
          </div>

        </div>

        <div className={styles.weeklyProgress}>
          <span>Target : {target} days / week</span>
        
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
