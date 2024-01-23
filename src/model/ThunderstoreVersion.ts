import Mod from './Mod';
import VersionNumber from './VersionNumber';
import ReactiveObjectConverterInterface from './safety/ReactiveObjectConverter';
import CdnProvider from '../providers/generic/connection/CdnProvider';

export default class ThunderstoreVersion extends Mod implements ReactiveObjectConverterInterface {

    private downloads: number = 0;
    private downloadUrl: string = '';

    public make(version: any): ThunderstoreVersion {
        this.setName(version.name);
        this.setFullName(version.full_name);
        this.setDependencies(version.dependencies);
        this.setDescription(version.description);
        this.setVersionNumber(new VersionNumber(version.version_number));
        this.setIcon(version.icon);
        this.setDownloadCount(version.downloads);
        this.setDownloadUrl(version.download_url);
        return this;
    }

    public fromReactive(reactive: any): ThunderstoreVersion {
        super.fromReactive(reactive);
        this.setDownloadCount(reactive.downloadCount);
        this.setDownloadUrl(reactive.downloadUrl);
        return this;
    }

    public getDownloadCount(): number {
        return this.downloads;
    }

    public setDownloadCount(downloads: number) {
        this.downloads = downloads;
    }

    public getDownloadUrl(): string {
        return CdnProvider.addCdnQueryParameter(this.downloadUrl);
    }

    public setDownloadUrl(url: string) {
        this.downloadUrl = url;
    }
}
