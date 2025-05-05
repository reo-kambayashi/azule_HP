/**
 * GitHub Pagesなどのサブディレクトリ環境でも正しく動作するパス生成関数
 * @param {string} path - 基準パスに追加するパス部分
 * @returns {string} 正しく結合されたURL
 */
export function createPath(path) {
  const base = import.meta.env.BASE_URL;
  const basePath = base.endsWith('/') ? base : `${base}/`;
  return path === '' ? base : `${basePath}${path}`;
}

/**
 * 画像パスを生成する関数
 * @param {string} imagePath - 画像ファイルへのパス
 * @returns {string} 正しい画像URL
 */
export function getImagePath(imagePath) {
  return createPath(`images/${imagePath.replace(/^images\//, '')}`);
}