import { IFiles } from '../common';

const ICON_SIZE = 50;
const ICON_TAG = 9991;
const LABEL_TAG = 9992;
const CELL_PADDING_LEFT = 16;
const ICON_TEXT_SPACING = 12;

@NativeClass()
export class AlbumSelectorViewController extends UIViewController implements UITableViewDataSource, UITableViewDelegate {
  static ObjCProtocols = [UITableViewDataSource, UITableViewDelegate];
  albums: IFiles[];
  onSelect: (album: IFiles) => void;

  private tableView: UITableView;

  static initWithAlbums(albums: IFiles[], onSelect: (album: IFiles) => void): AlbumSelectorViewController {
    const vc = AlbumSelectorViewController.new() as AlbumSelectorViewController;
    vc.albums = albums;
    vc.onSelect = onSelect;
    return vc;
  }

  viewDidLoad() {
    super.viewDidLoad();

    this.view.backgroundColor = UIColor.systemBackgroundColor;
    const title = UILabel.new();
    title.translatesAutoresizingMaskIntoConstraints = false;
    title.text = '';
    title.font = UIFont.boldSystemFontOfSize(20);
    title.textAlignment = NSTextAlignment.Center;

    this.tableView = UITableView.new();
    this.tableView.translatesAutoresizingMaskIntoConstraints = false;
    this.tableView.dataSource = this;
    this.tableView.delegate = this;
    this.tableView.rowHeight = 72;
    this.tableView.contentInset = {
      top: 20,
      left: 0,
      bottom: 12,
      right: 0,
    };

    this.tableView.scrollIndicatorInsets = this.tableView.contentInset;
    this.tableView.registerClassForCellReuseIdentifier(UITableViewCell.class(), 'AlbumCell');

    this.view.addSubview(title);
    this.view.addSubview(this.tableView);

    NSLayoutConstraint.activateConstraints([title.topAnchor.constraintEqualToAnchor(this.view.safeAreaLayoutGuide.topAnchor), title.leadingAnchor.constraintEqualToAnchor(this.view.leadingAnchor), title.trailingAnchor.constraintEqualToAnchor(this.view.trailingAnchor), this.tableView.topAnchor.constraintEqualToAnchor(title.bottomAnchor), this.tableView.leadingAnchor.constraintEqualToAnchor(this.view.leadingAnchor), this.tableView.trailingAnchor.constraintEqualToAnchor(this.view.trailingAnchor), this.tableView.bottomAnchor.constraintEqualToAnchor(this.view.safeAreaLayoutGuide.bottomAnchor)]);
  }

  @ObjCMethod()
  tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number {
    return this.albums?.length ?? 0;
  }

  @ObjCMethod()
  tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell {
    const cell = tableView.dequeueReusableCellWithIdentifierForIndexPath('AlbumCell', indexPath);

    const album = this.albums[indexPath.row];

    // ---------- ICON ----------
    let icon = cell.contentView.viewWithTag(ICON_TAG) as UIImageView;
    if (!icon) {
      icon = UIImageView.new();
      icon.tag = ICON_TAG;
      icon.contentMode = UIViewContentMode.ScaleAspectFill;
      icon.layer.cornerRadius = 6;
      icon.clipsToBounds = true;
      cell.contentView.addSubview(icon);
    }

    // ---------- LABEL ----------
    let label = cell.contentView.viewWithTag(LABEL_TAG) as UILabel;
    if (!label) {
      label = UILabel.new();
      label.tag = LABEL_TAG;
      label.font = UIFont.systemFontOfSize(16);
      cell.contentView.addSubview(label);
    }

    label.text = album.albunName;

    // ---------- LAYOUT ----------
    const h = cell.contentView.bounds.size.height;
    const contentHeight = cell.contentView.bounds.size.height;

    icon.frame = CGRectMake(CELL_PADDING_LEFT, (contentHeight - ICON_SIZE) / 2, ICON_SIZE, ICON_SIZE);

    label.sizeToFit();
    label.frame = CGRectMake(CELL_PADDING_LEFT + ICON_SIZE + ICON_TEXT_SPACING, (contentHeight - label.frame.size.height) / 2, cell.contentView.bounds.size.width - (CELL_PADDING_LEFT + ICON_SIZE + ICON_TEXT_SPACING + 16), label.frame.size.height);

    // ---------- IMAGE ----------
    icon.image = null;
    PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(album.iconIos, CGSizeMake(ICON_SIZE, ICON_SIZE), PHImageContentMode.AspectFill, null, (image) => {
      if (image) {
        icon.image = image;
      }
    });

    return cell;
  }

  @ObjCMethod()
  tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath) {
    const album = this.albums[indexPath.row];
    this.onSelect?.(album);
    this.dismissViewControllerAnimatedCompletion(true, null);
  }
}
