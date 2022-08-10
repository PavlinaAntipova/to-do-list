import React, {useState} from 'react';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
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
  TaskBox,
  TaskText,
  UncheckedIcon,
} from './TaskItem.styled';

function TaskItem({text, id, folder, isCompleted, date, priority}) {
  const [priorityBtn, setPriorityBtn] = useState(priority);
  const [startDate, setStartDate] = useState(date);
  const dispatch = useDispatch();
  const foldersItem = useSelector(getFoldersItems);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const isMobileSmall = useMediaQuery({query: '(max-width: 374px)'});
  const isMobileMedium = useMediaQuery({minWidth: 375, maxWidth: 424});
  const isMobileLarge = useMediaQuery({minWidth: 425, maxWidth: 767});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023});
  const isLaptop = useMediaQuery({minWidth: 1024, maxWidth: 1439});
  const isDesktop = useMediaQuery({query: '(min-width: 1440px)'});

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
      <TaskBox>
        <CheckBtn type="button" onClick={() => dispatch(completeTodo(id))}>
          <UncheckedIcon />
          <CheckedIcon completed={isCompleted ? 1 : 0} />
        </CheckBtn>

        <div>
          <Checkbox type="checkbox" />
          {isMobileSmall && (
            <TaskText completed={isCompleted ? 1 : 0}>
              {text.length >= 8 ? `${text.slice(0, 8) + '...'}` : `${text}`}
            </TaskText>
          )}
          {isMobileMedium && (
            <TaskText completed={isCompleted ? 1 : 0}>
              {text.length >= 10 ? `${text.slice(0, 10) + '...'}` : `${text}`}
            </TaskText>
          )}
          {isMobileLarge && (
            <TaskText completed={isCompleted ? 1 : 0}>
              {text.length >= 15 ? `${text.slice(0, 15) + '...'}` : `${text}`}
            </TaskText>
          )}
          {isTablet && (
            <TaskText completed={isCompleted ? 1 : 0}>
              {text.length >= 30 ? `${text.slice(0, 30) + '...'}` : `${text}`}
            </TaskText>
          )}
          {isLaptop && (
            <TaskText completed={isCompleted ? 1 : 0}>
              {text.length >= 55 ? `${text.slice(0, 55) + '...'}` : `${text}`}
            </TaskText>
          )}
          {isDesktop && (
            <TaskText completed={isCompleted ? 1 : 0}>
              {text.length >= 50 ? `${text.slice(0, 50) + '...'}` : `${text}`}
            </TaskText>
          )}
        </div>

        <DeleteBtn type="button" onClick={() => dispatch(deleteTodo(id))}>
          <MdOutlineDeleteOutline />
        </DeleteBtn>
      </TaskBox>

      <Info>
        <InfoBox>
          {foldersItem[folder] ? (
            <>
              <InfoFolder onClick={() => navigate(`/folders/${folder}`)}>
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
    </Task>
  );
}

export default TaskItem;
