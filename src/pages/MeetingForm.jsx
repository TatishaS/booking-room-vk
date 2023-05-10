import React from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import SpriteIcon from "../components/SpriteIcon";
import iconEdit from "../images/icon-edit.svg";
import { ReactComponent as IconSelectArrow } from "../images/icon-select-arrow.svg";

import { selectTowerOptions } from "../utils/SelectTowerOptions";
import { selectFloorOptions } from "../utils/SelectFloorOptions";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconSelectArrow />
    </components.DropdownIndicator>
  );
};

const bookingItems = [];

const MeetingForm = () => {
  const [editFormData, setEditFormData] = React.useState({
    tower: "",
    floor: "",
    description: "",
  });
  const [items, setItems] = React.useState([]);

  const getSelectTowerValue = () => {
    return editFormData.tower
      ? selectTowerOptions.find((tower) => tower.value === editFormData.tower)
      : "";
  };
  const getSelectFloorValue = () => {
    return editFormData.floor
      ? selectFloorOptions.find((floor) => floor.value === editFormData.floor)
      : "";
  };

  const handleChangeField = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setEditFormData({
      tower: "",
      floor: "",
      description: "",
    });
  };

  const handleClickAddBooking = (event) => {
    event.preventDefault();

    if (editFormData.tower && editFormData.floor) {
      const newItem = {
        id: items.length + 1,
        tower: editFormData.tower,
        floor: editFormData.floor,
        description: editFormData.description,
      };

      try {
        setItems((prev) => [...prev, newItem]);
        console.log(JSON.stringify(newItem));
      } catch (error) {
        console.error(error);
        alert("ОШИБКА ПРИ ДОБАВЛЕНИИ ДАННЫХ" + error);
      }

      setEditFormData({
        id: 0,
        tower: "",
        floor: "",
        description: "",
      });
    } else {
      alert("Заполните все поля");
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
                  <img
                    className="meeting__title-img"
                    src={iconEdit}
                    alt="edit row"
                    width="26"
                    height="26"
                  />
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
                      Башня
                    </label>

                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectTowerOptions}
                      placeholder="Выберите башню"
                      name="tower"
                      value={getSelectTowerValue()}
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
                      Этаж
                    </label>
                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectFloorOptions}
                      placeholder="Выберите этаж"
                      name="floor"
                      value={getSelectFloorValue()}
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
                    <label htmlFor="date" className="edit-form__label">
                      Date
                    </label>
                    <div className="edit-form__select-dropdown">
                      <input
                        type="date"
                        id="date"
                        value="2021-12-21"
                        className="edit-form__input-date"
                      />
                    </div>
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="time" className="edit-form__label">
                      Time
                    </label>
                    <div className="edit-form__select-dropdown">
                      <input
                        type="date"
                        id="time"
                        value="2021-12-21"
                        className="edit-form__input-date"
                      />
                    </div>
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="description" className="edit-form__label">
                      Комментарий
                    </label>
                    <textarea
                      placeholder="Комментарий..."
                      name="description"
                      className="edit-form__textarea"
                      rows={4}
                      id="description"
                      value={editFormData.description}
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
