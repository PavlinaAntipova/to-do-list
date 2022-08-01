import React, {useState} from 'react';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteTodo,
  completeTodo,
  changePriority,
  changeDate,
} from '../../../redux/planner/planner-slice';
import {getFoldersItems} from '../../../redux/selectors';
import {
  Checkbox,
  CheckBtn,
  CheckedIcon,
  DatePicker,
  DeleteBtn,
  DropDown,
  Info,
  InfoBox,
  InfoDate,
  InfoFolder,
  PriorityBox,
  PriorityButton,
  StyledDateIcon,
  StyledFolderIcon,
  Task,
  TaskText,
  UncheckedIcon,
} from './TaskItem.styled';

function TaskItem({text, id, folder, isCompleted, date, priority}) {
  const [priorityBtn, setPriorityBtn] = useState(priority);
  const [startDate, setStartDate] = useState(date);
  const dispatch = useDispatch();
  const foldersItem = useSelector(getFoldersItems);
  const [showDropdown, setShowDropdown] = useState(false);

  const onPriorityBtnClick = e => {
    const typeOfPriority = e.target.dataset.type;
    setPriorityBtn(typeOfPriority);
    setShowDropdown(!showDropdown);
    dispatch(changePriority({id, priority: typeOfPriority}));
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Task>
      <PriorityBox priority={priorityBtn} onClick={() => toggleDropdown()}>
        {showDropdown && (
          <DropDown>
            <PriorityButton data-type="low" onClick={onPriorityBtnClick}>
              low
            </PriorityButton>
            <PriorityButton data-type="medium" onClick={onPriorityBtnClick}>
              medium
            </PriorityButton>
            <PriorityButton data-type="high" onClick={onPriorityBtnClick}>
              high
            </PriorityButton>
          </DropDown>
        )}
      </PriorityBox>
      <CheckBtn type="button" onClick={() => dispatch(completeTodo(id))}>
        <UncheckedIcon />
        <CheckedIcon completed={isCompleted ? 1 : 0} />
      </CheckBtn>
      <div>
        <Checkbox type="checkbox" />
        <TaskText completed={isCompleted ? 1 : 0}>{text}</TaskText>
      </div>

      <Info>
        <InfoBox>
          {foldersItem[folder] ? (
            <>
              <InfoFolder>
                <StyledFolderIcon />
                <span>{foldersItem[folder]?.name}</span>
              </InfoFolder>
              <InfoDate>
                <DatePicker
                  type="date"
                  value={startDate}
                  onChange={e => {
                    setStartDate(e.target.value);
                    dispatch(changeDate({id, date: e.target.value}));
                  }}
                />
                <StyledDateIcon />
              </InfoDate>
            </>
          ) : (
            <>
              <InfoDate>
                <DatePicker
                  type="date"
                  value={startDate}
                  onChange={e => {
                    setStartDate(e.target.value);
                  }}
                  onFocus={e => {
                    dispatch(changeDate({id, date: e.target.value}));
                  }}
                />
                <StyledDateIcon />
              </InfoDate>
            </>
          )}
        </InfoBox>
      </Info>

      <DeleteBtn type="button" onClick={() => dispatch(deleteTodo(id))}>
        <MdOutlineDeleteOutline />
      </DeleteBtn>
    </Task>
  );
}

export default TaskItem;
