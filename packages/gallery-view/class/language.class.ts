import { ELanguage } from '../language.enum';

export class LanguageController {
  private translations: { [key in ELanguage]: { [key: string]: string } } = {
    [ELanguage.Spanish]: {
      no_permisos: 'No tiene permisos',
      max_item: 'Alcanzaste el máximo de ítems para seleccionar',
      no_items: 'No tienes elementos en tu galería',
      titulo_btn_preview: 'Ver',
      titulo_btn_edit: 'Editar',
      msj_construction: 'Esta sección está en construcción. ¡Próximamente!',
      msj_select_item_preview: 'Por favor, seleccione al menos un ítem.',
      titulo_btn_solicitar: 'Obtener permisos',
    },
    [ELanguage.English]: {
      no_permisos: 'No permission',
      max_item: "You've reached the maximum items to select",
      no_items: "You don't have items in your gallery",
      titulo_btn_preview: 'Preview',
      titulo_btn_edit: 'Edit',
      msj_construction: 'This section is under construction. Coming soon!',
      msj_select_item_preview: 'Please select at least one item',
      titulo_btn_solicitar: 'Get Permissions',
    },
    [ELanguage.Russian]: {
      no_permisos: 'Нет разрешений',
      max_item: 'Вы достигли максимального количества элементов для выбора',
      no_items: 'У вас нет элементов в галерее',
      titulo_btn_preview: 'Предварительный просмотр',
      titulo_btn_edit: 'Редактировать',
      msj_construction: 'Этот раздел находится в стадии разработки. Скоро будет доступно!',
      msj_select_item_preview: 'Пожалуйста, выберите по крайней мере один элемент',
      titulo_btn_solicitar: 'Требовать разрешения',
    },
    [ELanguage.Chinese]: {
      no_permisos: '没有权限',
      max_item: '您已达到最大选择项目数',
      no_items: '您的图库中没有项目',
      titulo_btn_preview: '览',
      titulo_btn_edit: '编辑',
      msj_construction: '此部分正在建设中。敬请期待！',
      msj_select_item_preview: '请至少选择一个项目',
      titulo_btn_solicitar: '请求权限请求权限',
    },
  };

  constructor(private currentLanguage: ELanguage = ELanguage.English) {}

  setLanguage(language: ELanguage) {
    this.currentLanguage = language;
  }

  getTranslation(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}
