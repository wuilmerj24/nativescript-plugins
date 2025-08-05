import { AndroidApplication, Application, ApplicationEventData, Color, Screen, Utils } from '@nativescript/core';
import { MediaStoreAndroid } from './class/mediastore.android';
import { GlideMediaLoader, SpinnerDataAdapter } from './class/spinner.adaptador';
import { CLog, GalleryViewCommon, GetSetProperty, IFileData, IFiles, TipoFile } from './common';
import { check as checkPermission, openSettings, request as requestPermission, Status } from '@nativescript-community/perms';
import { ELanguage } from './language.enum';
import { LanguageController } from './class/language.class';
import { ListaAdaptadorForAndroid } from './class/recycler.adaptador';
import { ImagePagerAdapter } from './class/modal.android';

declare var developerwym;

export class GalleryView extends GalleryViewCommon {
  private spinner: android.widget.Spinner;
  private contador: android.widget.TextView;
  private rv: androidx.recyclerview.widget.RecyclerView;
  private btnPreview: android.widget.Button;
  private btnEdit: android.widget.Button;
  private mediaStore: MediaStoreAndroid;
  private files: Array<IFiles> = new Array();
  private ref = new WeakRef(this);
  private adaptador: ListaAdaptadorForAndroid;
  private oldSpinnerIndex: number = -1;
  @GetSetProperty()
  public language: ELanguage;
  @GetSetProperty()
  public bgColorHeader: string;
  @GetSetProperty()
  public textcolorHeader: string;
  @GetSetProperty()
  public maxItemSelect: number;
  @GetSetProperty()
  public bgColorFooter: string;
  @GetSetProperty()
  public textColorFooter: string;
  @GetSetProperty()
  public preview: boolean;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  colorRadio: string;
  // VARIABLES locals
  private idioma: LanguageController;
  private btnSolicitar: android.widget.Button;
  private contador_items: number = 0;
  private mediaLoader: GlideMediaLoader;
  constructor() {
    super();
  }

  createNativeView(): androidx.constraintlayout.widget.ConstraintLayout {
    this.idioma = new LanguageController(this.language);
    this.nativeView = new androidx.constraintlayout.widget.ConstraintLayout(this._context);
    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).setId(android.view.View.generateViewId());
    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).setBackgroundColor(android.graphics.Color.BLACK);
    return this.nativeView;
  }

  async checkPerms(): Promise<boolean> {
    try {
      const videoPermission = await checkPermission('video', { type: 'always' });
      const photoPermission = await checkPermission('photo', { type: 'always' });
      if (videoPermission == Status.Authorized && photoPermission == Status.Authorized) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      CLog('Error al verificar permisos:', error);
      return false; // Retorna false en caso de error
    }
  }

  async solicitarPermisos(): Promise<boolean> {
    try {
      const videoPermission = await requestPermission('photo', { type: 'always' });
      const photoPermission = await requestPermission('video', { type: 'always' });
      if (videoPermission == Status.Authorized && photoPermission == Status.Authorized) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async onLoaded() {
    super.onLoaded();
    const permissionsGranted = await this.checkPerms();
    if (this.btnSolicitar != null) {
      this.nativeView.removeView(this.btnSolicitar);
    }
    if (permissionsGranted) {
      CLog('Ambos permisos concedidos');
      Utils.setTimeout(() => {
        this.renderUI();
      }, 100);
    } else {
      CLog('Uno o ambos permisos denegados');
      await this.solicitarPermisos()
        .then((res) => {
          Utils.setTimeout(() => {
            this.renderUI();
          }, 100);
        })
        .catch((err) => {
          this.btnSolicitar = new android.widget.Button(this._context);
          this.btnSolicitar.setText(this.idioma.getTranslation('titulo_btn_solicitar') + ' ' + this.idioma.getTranslation('no_permisos'));
          this.btnSolicitar.setGravity(android.view.Gravity.CENTER);
          this.btnSolicitar.setOnClickListener(
            new android.view.View.OnClickListener({
              onClick(param0) {
                openSettings().then(async (res) => {
                  const permissionsGranted = await this.checkPerms();
                });
              },
            })
          );
          this.nativeView.addView(this.btnSolicitar);
        });
    }
  }

  private onResume(): void {
    // CLog("La aplicación ha vuelto al primer plano (onResume)");
    this.mediaLoader.resumeRequests(this._context);
    // Lógica para onResume
  }

  private onPause(): void {
    // CLog("La aplicación ha entrado en segundo plano (onPause)");
    // Lógica para onPause
    this.mediaLoader.pauseRequests(this._context);
  }

  renderUI() {
    const self = this;
    this.mediaStore = new MediaStoreAndroid();
    let imagenes: Array<IFiles> = new Array();
    let videos: Array<IFiles> = new Array();

    // Obtener imágenes y videos
    videos = this.mediaStore.getVideos(this._context);
    imagenes = this.mediaStore.getImagenes(this._context);
    this.files = [...imagenes, ...videos];
    if(this.files.length<=0){
      const layout = new android.widget.FrameLayout(this._context);
      layout.setLayoutParams(new android.view.ViewGroup.LayoutParams(
        android.view.ViewGroup.LayoutParams.MATCH_PARENT,
        android.view.ViewGroup.LayoutParams.MATCH_PARENT
      ));
      layout.setBackgroundColor(new Color('#000000').android); // Fondo negro

      const textView = new android.widget.TextView(this._context);
      textView.setText("Texto Centrado");
      textView.setTextColor(new Color('#FFFFFF').android); // Texto blanco
      textView.setTextSize(android.util.TypedValue.COMPLEX_UNIT_SP, 18);
      textView.setGravity(android.view.Gravity.CENTER);

      const params = new android.widget.FrameLayout.LayoutParams(
        android.widget.FrameLayout.LayoutParams.WRAP_CONTENT,
        android.widget.FrameLayout.LayoutParams.WRAP_CONTENT,
        android.view.Gravity.CENTER
      );

      layout.addView(textView, params);
      this.nativeView.addView(layout);
      return;
    }
    this.files[0].isSelected = true;
    Application.on(Application.resumeEvent, this.onResume, this);
    Application.on(Application.suspendEvent, this.onPause, this);
    // Crear body
    this.rv = this.createLista();
    this.rv.setNestedScrollingEnabled(true);
    this.rv.addOnItemTouchListener(
      new developerwym.plugins.ns.RecyclerTouchListener(
        this._context,
        this.rv,
        new developerwym.plugins.ns.RecyclerTouchListener.ClickListener({
          onClick: (view: android.view.View, position: number) => {
            try {
              // Obtener el elemento seleccionado en this.files
              const selectedItem = this.files.filter((item) => item.isSelected)[0];

              if (selectedItem) {
                // Obtener el elemento en la posición `position` de `data`
                const dataItem = selectedItem.data[position];

                // Verificar si ya se ha alcanzado el límite de selección
                const currentSelectedCount = selectedItem.data.filter((item) => item.isSelected).length;

                if (dataItem.isSelected || currentSelectedCount < this.maxItemSelect) {
                  // Cambiar el estado de isSelected
                  dataItem.isSelected = !dataItem.isSelected;

                  // Actualizar el contador
                  self.contador_items = this.files.filter((item) => item.isSelected === true)[0].data.filter((item) => item.isSelected === true).length;
                  self.contador.setText(`${self.contador_items}/${this.maxItemSelect}`);
                  // Actualizar el estado del RadioButton
                  const radio: android.widget.RadioButton = (view as android.widget.LinearLayout).getChildAt(1) as android.widget.RadioButton;
                  radio.setChecked(dataItem.isSelected);

                  // Notificar el cambio (si es necesario)
                  this.ref?.get()?.sendEvent(
                    GalleryView.clickEvent,
                    this.files.filter((item) => item.isSelected)[0].data.filter((item) => item.isSelected)
                  );
                } else {
                  // Mostrar un mensaje o notificar que se ha alcanzado el límite de selección
                  CLog('Límite de selección alcanzado');
                }
              } else {
                CLog('No hay ningún elemento seleccionado en this.files');
              }
            } catch (error) {
              CLog('Error en onClick: ', error);
            }
          },
          onLongClick: (view: android.view.View, position: number) => {
            // Lógica para onLongClick (si es necesario)
          },
        })
      )
    );

    this.rv.addOnScrollListener(
      new ScrollEvent(this._context, this.rv, {
        onScrolled(recyclerView, dx, dy) {
          CLog('scroll ', dx, dy);
          const data = self.files.filter((item) => item.isSelected)[0].data.filter((item) => item.isSelected);
          self.ref?.get()?.sendEvent(GalleryView.scrollEvent, data, null, dx, dy);
        },
        onScrollStateChanged(recyclerView, state) {
          // CLog("onScrollStateChanged")
        },
      })
    );
    // Crear footer
    this.btnPreview = this.createBtnPreview();
    this.btnEdit = this.createBtnEdit();

    const headerContainer: android.widget.LinearLayout = this.createHeaderContainer();

    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).addView(headerContainer);
    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).addView(this.rv);
    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).addView(this.btnPreview);
    (this.nativeView as androidx.constraintlayout.widget.ConstraintLayout).addView(this.btnEdit);

    const constraintSet: androidx.constraintlayout.widget.ConstraintSet = new androidx.constraintlayout.widget.ConstraintSet();
    constraintSet.clone(this.nativeView);
    constraintSet.connect(headerContainer.getId(), androidx.constraintlayout.widget.ConstraintSet.START, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.START);
    constraintSet.connect(headerContainer.getId(), androidx.constraintlayout.widget.ConstraintSet.TOP, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.TOP);
    constraintSet.connect(headerContainer.getId(), androidx.constraintlayout.widget.ConstraintSet.END, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.END);

    // RecyclerView: Debajo del header
    constraintSet.connect(this.rv.getId(), androidx.constraintlayout.widget.ConstraintSet.TOP, headerContainer.getId(), androidx.constraintlayout.widget.ConstraintSet.BOTTOM);
    constraintSet.connect(this.rv.getId(), androidx.constraintlayout.widget.ConstraintSet.START, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.START);
    constraintSet.connect(this.rv.getId(), androidx.constraintlayout.widget.ConstraintSet.END, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.END);
    constraintSet.connect(this.rv.getId(), androidx.constraintlayout.widget.ConstraintSet.BOTTOM, this.btnPreview.getId(), androidx.constraintlayout.widget.ConstraintSet.TOP);

    // Botones: Debajo del RecyclerView
    constraintSet.connect(this.btnPreview.getId(), androidx.constraintlayout.widget.ConstraintSet.BOTTOM, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.BOTTOM);
    constraintSet.connect(this.btnPreview.getId(), androidx.constraintlayout.widget.ConstraintSet.START, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.START);
    constraintSet.connect(this.btnEdit.getId(), androidx.constraintlayout.widget.ConstraintSet.BOTTOM, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.BOTTOM);
    constraintSet.connect(this.btnEdit.getId(), androidx.constraintlayout.widget.ConstraintSet.END, androidx.constraintlayout.widget.ConstraintSet.PARENT_ID, androidx.constraintlayout.widget.ConstraintSet.END);

    constraintSet.applyTo(this.nativeView);
  }

  private createHeaderContainer(): android.widget.LinearLayout {
    // Crear un LinearLayout horizontal como contenedor del header
    const headerContainer = new android.widget.LinearLayout(this._context);
    headerContainer.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    headerContainer.setLayoutParams(
      new androidx.constraintlayout.widget.ConstraintLayout.LayoutParams(
        android.view.ViewGroup.LayoutParams.MATCH_PARENT, // Ancho completo
        android.view.ViewGroup.LayoutParams.WRAP_CONTENT // Alto según el contenido
      )
    );
    headerContainer.setId(android.view.View.generateViewId()); // Asignar un ID único

    // Crear el Spinner y el TextView (contador)
    this.spinner = this.createSpinner();
    this.contador = this.createContador();

    // Agregar el Spinner y el TextView al contenedor del header
    headerContainer.addView(this.spinner);
    headerContainer.addView(this.contador);
    headerContainer.setBackgroundColor(new Color(this.bgColorHeader).android);
    return headerContainer;
  }


  private createSpinner(): android.widget.Spinner {
    const spinner: android.widget.Spinner = new android.widget.Spinner(this._context);
    const spinnerParams: android.widget.LinearLayout.LayoutParams = new android.widget.LinearLayout.LayoutParams(
      0, // Ancho inicial (se ajustará con weight)
      android.view.ViewGroup.LayoutParams.WRAP_CONTENT
    );
    spinnerParams.weight = 0.8; // 80% del ancho del contenedor
    spinner.setLayoutParams(spinnerParams);
    spinner.setId(android.view.View.generateViewId());
    spinner.setSelection(0);
    spinner.setDropDownWidth(Screen.mainScreen.widthPixels);

    const adaptador = new SpinnerDataAdapter(this.files, this._context, this.bgColorHeader, this.textcolorHeader);
    spinner.setAdapter(adaptador);
    const self = this;
    spinner.setOnItemSelectedListener(
      new android.widget.AdapterView.OnItemSelectedListener({
        onItemSelected: (param0: android.widget.AdapterView<any>, param1: android.view.View, position: number, param3: number) => {
          if (self.files != null) {
            if (this.oldSpinnerIndex >= 0) {
              this.files[this.oldSpinnerIndex].isSelected = false;
            }
            self.files[position].isSelected = true;
            this.mediaLoader = GlideMediaLoader.getInstance();
            this.mediaLoader.clearAll(this._context, this.rv);
            this.adaptador.updateData(self.files[position].data);
            this.oldSpinnerIndex = position;
          }
        },
        onNothingSelected: (param0: android.widget.AdapterView<any>) => {
          // No hacer nada
        },
      })
    );

    return spinner;
  }

  private createContador(): android.widget.TextView {
    const contador: android.widget.TextView = new android.widget.TextView(this._context);
    this.contador_items = this.files.filter((item) => item.isSelected === true)[0].data.filter((item) => item.isSelected === true).length;
    contador.setText(`${this.contador_items}/${this.maxItemSelect}`);
    contador.setId(android.view.View.generateViewId());

    const textParams: android.widget.LinearLayout.LayoutParams = new android.widget.LinearLayout.LayoutParams(
      0, // Ancho inicial (se ajustará con weight)
      // android.view.ViewGroup.LayoutParams.WRAP_CONTENT
      this.dpToPx(2)
    );
    textParams.weight = 0.2; // 20% del ancho del contenedor
    contador.setLayoutParams(textParams);

    contador.setTextSize(20);
    contador.setTextColor(new Color(this.textcolorHeader).android);
    contador.setBackgroundColor(new Color('transparent').android);
    contador.setGravity(android.view.Gravity.CENTER);

    return contador;
  }

  private dpToPx(dp: number): number {
    return Math.round(android.util.TypedValue.applyDimension(
      android.util.TypedValue.COMPLEX_UNIT_DIP,
      dp,
      this._context.getResources().getDisplayMetrics()
    ));
  }

  private createLista(): androidx.recyclerview.widget.RecyclerView {
    const rv: androidx.recyclerview.widget.RecyclerView = new androidx.recyclerview.widget.RecyclerView(this._context);
    rv.setId(android.view.View.generateViewId());
    const recyclerParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams = new androidx.constraintlayout.widget.ConstraintLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 0);
    rv.setLayoutParams(recyclerParams);
    rv.setBackgroundColor(android.graphics.Color.BLACK);
    rv.setHasFixedSize(true);
    rv.setId(android.view.View.generateViewId());
    rv.setAddStatesFromChildren(true);
    rv.setEnabled(true);
    const layout: androidx.recyclerview.widget.GridLayoutManager = new androidx.recyclerview.widget.GridLayoutManager(this._context, 5);
    layout.setOrientation(androidx.recyclerview.widget.LinearLayoutManager.VERTICAL);
    rv.setLayoutManager(layout);
    this.adaptador = new ListaAdaptadorForAndroid(this.files.filter((item) => item.isSelected)[0].data, this.colorRadio);
    rv.setAdapter(this.adaptador);
    rv.addItemDecoration(new SpaceItemDecoration(10));
    return rv;
  }

  private createBtnPreview(): android.widget.Button {
    const btnpreview: android.widget.Button = new android.widget.Button(this._context);
    btnpreview.setId(android.view.View.generateViewId());
    btnpreview.setText(this.idioma.getTranslation('titulo_btn_preview'));
    btnpreview.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    btnpreview.setTextColor(new Color(this.textColorFooter).android);
    const button1Params: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams = new androidx.constraintlayout.widget.ConstraintLayout.LayoutParams(0, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
    btnpreview.setLayoutParams(button1Params);
    const self = this;
    btnpreview.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0) {
          let index: number = self.files.findIndex((item) => item.isSelected);
          CLog(index);
          let files = self.files.filter((item) => item.isSelected)[0].data;
          let images: string[] = new Array();

          for (let i: number = 0; i < files.length; i++) {
            if (files[i].isSelected) {
              images.push(files[i].uri);
            }
          }
          let initialPosition: number = 0;
          self.openImageModal(images, initialPosition);
        },
      })
    );
    return btnpreview;
  }

  private createBtnEdit(): android.widget.Button {
    const btnEdit: android.widget.Button = new android.widget.Button(this._context);
    btnEdit.setId(android.view.View.generateViewId());
    btnEdit.setText(this.idioma.getTranslation('titulo_btn_edit'));
    btnEdit.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    btnEdit.setTextColor(new Color(this.textColorFooter).android);
    btnEdit.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0) {
          CLog('This section is under construction. Coming soon!');
        },
      })
    );
    const button1Params: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams = new androidx.constraintlayout.widget.ConstraintLayout.LayoutParams(0, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
    btnEdit.setLayoutParams(button1Params);
    return btnEdit;
  }

  openImageModal(images: string[], initialPosition: number = 0) {
    const context = this._context;

    // Crear el diálogo
    const dialog = new android.app.Dialog(context);

    // Configurar el diálogo como fullscreen
    dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE); // Eliminar la barra de título
    dialog.getWindow().setFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN, android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN); // Forzar pantalla completa

    dialog.getWindow().setLayout(
      android.view.ViewGroup.LayoutParams.MATCH_PARENT, // Ancho completo
      android.view.ViewGroup.LayoutParams.MATCH_PARENT // Alto completo
    );
    dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK)); // Fondo negro

    // Crear un LinearLayout como contenedor principal
    const linearLayout = new android.widget.LinearLayout(context);
    linearLayout.setLayoutParams(
      new android.view.ViewGroup.LayoutParams(
        android.view.ViewGroup.LayoutParams.MATCH_PARENT, // Ancho completo
        android.view.ViewGroup.LayoutParams.MATCH_PARENT // Alto completo
      )
    );
    linearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
    linearLayout.setPadding(0, 0, 0, 0); // Sin padding

    // Crear el header
    const headerLayout = new android.widget.RelativeLayout(context);
    headerLayout.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    headerLayout.setPadding(20, 20, 20, 20); // Espaciado del header

    // Botón de cerrar
    const closeButton = new android.widget.ImageButton(context);
    closeButton.setImageResource(android.R.drawable.ic_menu_close_clear_cancel); // Icono de cerrar
    closeButton.setBackgroundResource(android.R.drawable.btn_default); // Fondo del botón
    closeButton.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick(param0) {
          dialog.dismiss();
        },
      })
    );

    // Título
    const title = new android.widget.TextView(context);
    title.setText(`${initialPosition + 1}/${images.length}`); // Título inicial
    title.setTextSize(18); // Tamaño del texto
    title.setTypeface(null, android.graphics.Typeface.BOLD); // Texto en negrita
    title.setTextColor(android.graphics.Color.WHITE); // Color del texto

    // Configurar el layout del header
    const closeButtonParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    closeButtonParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_START); // Alinear a la izquierda
    closeButton.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    headerLayout.addView(closeButton, closeButtonParams);

    const titleParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    titleParams.addRule(android.widget.RelativeLayout.CENTER_IN_PARENT); // Centrar el título
    headerLayout.addView(title, titleParams);

    // Agregar el header al LinearLayout principal
    linearLayout.addView(headerLayout);

    // Crear el ViewPager2 para el carrusel de imágenes
    const viewPager = new androidx.viewpager2.widget.ViewPager2(context);
    viewPager.setLayoutParams(
      new android.widget.LinearLayout.LayoutParams(
        android.view.ViewGroup.LayoutParams.MATCH_PARENT,
        android.view.ViewGroup.LayoutParams.MATCH_PARENT // Altura completa
      )
    );

    // Configurar el adaptador del ViewPager2
    const adapter = new ImagePagerAdapter(images);
    viewPager.setAdapter(adapter);
    viewPager.setCurrentItem(initialPosition, false);

    viewPager.registerOnPageChangeCallback(
      new PageChangeCallbackEvent({
        onPageScrolled(position, positionOffset, positionOffsetPixels) {},
        onPageScrollStateChanged(position) {},
        onPageSelected(position) {
          title.setText(`${position + 1}/${images.length}`);
        },
      })
    );

    // Agregar el ViewPager2 al LinearLayout principal
    linearLayout.addView(viewPager);

    // Configurar el contenido del diálogo
    dialog.setContentView(linearLayout);

    // Hacer visible el diálogo
    dialog.show();

    // Asegurarse de que el diálogo ocupe toda la pantalla
    const window = dialog.getWindow();
    if (window) {
      window.setLayout(
        android.view.ViewGroup.LayoutParams.MATCH_PARENT, // Ancho completo
        android.view.ViewGroup.LayoutParams.MATCH_PARENT // Alto completo
      );
    }
  }
}

@NativeClass()
class SpaceItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
  private spacing: number;

  constructor(spacing: number) {
    super();
    this.spacing = spacing;
  }

  // Firma correcta del método getItemOffsets
  public getItemOffsets(outRect: android.graphics.Rect, view: unknown, param2: unknown, param3?: unknown): void {
    outRect.left = this.spacing / 2;
    outRect.right = this.spacing / 2;
    outRect.top = this.spacing / 2;
    outRect.bottom = this.spacing / 2;
  }
}

@NativeClass()
export class ScrollEvent extends androidx.recyclerview.widget.RecyclerView.OnScrollListener {
  constructor(private context: android.content.Context, private recyclerview: androidx.recyclerview.widget.RecyclerView, private scrollEvento: ScrollEvento) {
    super();
  }

  public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void {
    super.onScrolled(param0, param1, param2);
    this.scrollEvento.onScrolled(param0, param1, param2);
  }

  public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void {
    super.onScrollStateChanged(param0, param1);
    this.scrollEvento.onScrollStateChanged(param0, param1);
  }
}

interface ScrollEvento {
  onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
  onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, state: number): void;
}

export interface ViewPager2EventListener {
  onPageScrollStateChanged(position: number);
  onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number);
  onPageSelected(position: number);
}

@NativeClass
export class PageChangeCallbackEvent extends androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback {
  private listener: ViewPager2EventListener;
  constructor(_listener: ViewPager2EventListener) {
    super();
    this.listener = _listener;
  }

  public onPageScrollStateChanged(position: number): void {
    super.onPageScrollStateChanged(position);
    this.listener.onPageScrollStateChanged(position);
  }

  public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void {
    super.onPageScrolled(position, positionOffset, positionOffsetPixels);
    this.listener.onPageScrolled(position, positionOffset, positionOffsetPixels);
  }

  public onPageSelected(position: number): void {
    super.onPageSelected(position);
    this.listener.onPageSelected(position);
  }
}
