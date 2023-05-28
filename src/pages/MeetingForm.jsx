import React from "react";
import ReactCalendar from "../components/Dashboard/ReactCalendar/ReactCalendar";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import Select, { components } from "react-select";
import { selectTowerOptions } from "../utils/SelectTowerOptions";
import { selectFloorOptions } from "../utils/SelectFloorOptions";
import { selectRoomOptions } from "../utils/SelectRoomOptions";
import { formatDate } from "../utils/date";
import SpriteIcon from "../components/SpriteIcon";
import { ReactComponent as IconSelectArrow } from "../images/icon-select-arrow.svg";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconSelectArrow />
    </components.DropdownIndicator>
  );
};

const MeetingForm = () => {
  const [editFormData, setEditFormData] = React.useState({
    tower: "",
    floor: "",
    room: "",
    date: "",
    timeRange: ["10:00", "11:00"],
    description: "",
  });
  const [items, setItems] = React.useState([]);

  const { tower, floor, room, date, timeRange, description } = editFormData;

  const getSelectValue = (param, options) => {
    return param ? options.find((option) => option.value === param) : "";
  };

  const handleChangeField = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectDate = (date) => {
    setEditFormData({
      ...editFormData,
      date: formatDate(date),
    });
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setEditFormData({
      tower: "",
      floor: "",
      room: "",
      date: "",
      timeRange: ["10:00", "11:00"],
      description: "",
    });
  };

  const handleClickAddBooking = (event) => {
    event.preventDefault();

    if (tower && floor && room && date && timeRange) {
      const newItem = {
        id: items.length + 1,
        tower,
        floor,
        room,
        date,
        timeRange,
        description,
      };

      try {
        setItems((prev) => [...prev, newItem]);
        console.log(JSON.stringify(newItem));
        alert("Вы успешно заняли переговорную!");
      } catch (error) {
        console.error(error);
        alert("Проверьте заполнение обязательных полей (со *)" + error);
      }

      setEditFormData({
        id: 0,
        tower: "",
        floor: "",
        date: "",
        timeRange: ["10:00", "11:00"],
        description: "",
      });
    } else {
      console.log({ tower, floor, room, date, timeRange });
      alert("Заполните все поля со звездочкой *");
    }
  };

  return (
    <>
      <main className="meeting meeting--editform">
        <div className="meeting__form-container container">
          <div className="meeting__inner">
            <div className="meeting__content-wrapper">
              <div className="meeting__page-top">
                <div className="meeting__title-wrapper">
                  <h2 className="meeting__form-title">
                    Бронирование переговорных
                  </h2>
                </div>
              </div>

              <section className="meeting__edit-form">
                <form className="edit-form" onSubmit={handleClickAddBooking}>
                  <div className="edit-form__btn-wrapper">
                    <button
                      className="edit-form__button cancel"
                      onClick={handleClearForm}
                    >
                      Очистить
                    </button>
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="tower" className="edit-form__label">
                      Башня*
                    </label>

                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectTowerOptions}
                      placeholder="Выберите башню"
                      name="tower"
                      value={getSelectValue(tower, selectTowerOptions)}
                      onChange={(newValue) =>
                        setEditFormData({
                          ...editFormData,
                          tower: newValue.value,
                        })
                      }
                      components={{ DropdownIndicator }}
                    />
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="floor" className="edit-form__label">
                      Этаж*
                    </label>
                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectFloorOptions}
                      placeholder="Выберите этаж"
                      name="floor"
                      value={getSelectValue(floor, selectFloorOptions)}
                      onChange={(newValue) =>
                        setEditFormData({
                          ...editFormData,
                          floor: newValue.value,
                        })
                      }
                      components={{ DropdownIndicator }}
                    />
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="floor" className="edit-form__label">
                      Переговорная*
                    </label>
                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectRoomOptions}
                      placeholder="Выберите переговорную"
                      name="room"
                      value={getSelectValue(room, selectRoomOptions)}
                      onChange={(newValue) =>
                        setEditFormData({
                          ...editFormData,
                          room: newValue.value,
                        })
                      }
                      components={{ DropdownIndicator }}
                    />
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="date" className="edit-form__label">
                      Дата*
                    </label>
                    <ReactCalendar onChangeDay={handleSelectDate} />
                  </div>

                  <div className="edit-form__row">
                    <label htmlFor="time" className="edit-form__label">
                      Время (интервал)*
                    </label>
                    <TimeRangePicker
                      onChange={(newValue) =>
                        setEditFormData({
                          ...editFormData,
                          timeRange: newValue,
                        })
                      }
                      value={timeRange}
                    />
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="description" className="edit-form__label">
                      Мини-комментарий
                    </label>
                    <textarea
                      placeholder="Комментарий..."
                      name="description"
                      className="edit-form__textarea"
                      rows={4}
                      id="description"
                      value={description}
                      onChange={handleChangeField}
                    ></textarea>
                  </div>

                  <button className="edit-form__button save" type="submit">
                    <SpriteIcon name="save" width="26" height="26" />
                    Забронировать
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
      <div className="overlay"></div>
    </>
  );
};

export default MeetingForm;
